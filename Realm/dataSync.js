import Realm from 'realm';
import EmployeeSchema from './schema/Employee';
import MenuSchema from './schema/Menu';
import TranscationSchema from './schema/Transcation';
import {getMenu, saveTranscations} from '../Services/index';
import {getEmployees} from '../Services/index';
import moment from 'moment';

const employeeOptions = {
  path: 'myrealm',
  schema: [EmployeeSchema.schema],
};

const menuOptions = {
  path: 'myrealm',
  schema: [MenuSchema.schema],
};

const TranscationOptions = {
  path: 'myrealm',
  schema: [TranscationSchema.schema],
};

export const getAllEmployees = () => {
  return new Promise(async (resolve, reject) => {
    let realm = new Realm(employeeOptions);
    try {
      let empList = await getEmployees();
      if (empList.data) {
        realm.write(() => {
          realm.deleteAll();
          for (let emp of empList.data) {
            let finalObj = {
              _id: Realm.BSON.ObjectId().toHexString(),
              empId: emp.empId,
              empCode: emp.empCode,
              empName: emp.empName,
              empCardNo: emp.empCardNo,
              empImage: emp.image ? emp.image : '',
            };
            realm.create('Employee', finalObj);
          }
        });
        realm.close();
        resolve({
          status: true,
        });
      }
    } catch (ex) {
      console.log('error', ex);
      realm.close();
      return resolve({
        status: false,
      });
    }
  });
};

export const getEmpByCardNo = cardNo => {
  return new Promise(async (resolve, reject) => {
    let realm = await Realm.open(employeeOptions);
    try {
      const employees = realm.objects('Employee');
      const selectedEmployees = employees.filtered('empCardNo == $0', cardNo);
      if (selectedEmployees && selectedEmployees.length) {
        resolve({
          status: true,
          data: selectedEmployees.toJSON(),
        });
      } else {
        resolve({
          status: false,
          data: {},
        });
      }
      realm.close();
    } catch (error) {
      console.log('errorrr line 613=>', error);
      realm.close();
      return resolve({
        status: false,
        data: {},
      });
    }
  });
};

export const getAllMenu = () => {
  return new Promise(async (resolve, reject) => {
    let realm = new Realm(menuOptions);
    try {
      let menuList = await getMenu();
      if (menuList.data) {
        realm.write(() => {
          realm.deleteAll();
          for (let menu of menuList.data) {
            let finalObj = {
              _id: Realm.BSON.ObjectId().toHexString(),
              menuId: menu.menuId,
              menuName: menu.menuName,
            };
            realm.create('Menu', finalObj);
          }
        });
        realm.close();
        resolve({
          status: true,
        });
      }
    } catch (ex) {
      console.log('errorrrr=>', ex);
      realm.close();
      return resolve({
        status: false,
      });
    }
  });
};

export const getMenuList = () => {
  return new Promise(async (resolve, reject) => {
    let realm = await Realm.open(menuOptions);
    try {
      const menu = realm.objects('Menu');
      if (menu && menu.length) {
        resolve({
          status: true,
          data: menu.toJSON(),
        });
      } else {
        resolve({
          status: false,
          data: {},
        });
      }
      realm.close();
    } catch (error) {
      realm.close();
      return resolve({
        status: false,
        data: {},
      });
    }
  });
};

export const addNewTranscation = newTrn => {
  return new Promise(async (resolve, reject) => {
    let realm = new Realm(TranscationOptions);
    newTrn._id = Realm.BSON.ObjectId().toHexString();
    try {
      // create realm object
      realm.write(() => {
        realm.create('Transcation', newTrn);
      });
      console.log('added=>', newTrn);
      realm.close();
      resolve(true);
    } catch (error) {
      console.log('errorrr line 388=>', error);
      realm.close();
      return resolve(false);
    }
  });
};

export const getLocalTranscations = newTrn => {
  return new Promise(async (resolve, reject) => {
    let realm = await Realm.open(TranscationOptions);
    try {
      const trns = realm.objects('Transcation');
      resolve({
        status: true,
        data: trns.toJSON(),
      });
      realm.close();
    } catch (error) {
      realm.close();
      return resolve({
        status: false,
        data: [],
      });
    }
  });
};

export const syncPendingTranscations = () => {
  return new Promise(async (resolve, reject) => {
    let realm = await Realm.open(TranscationOptions);
    try {
      const trns = realm.objects('Transcation').toJSON();
      let payload = [];
      for (let trn of trns) {
        let obj = {
          empId: trn.empId,
          menuId: trn.menuId,
          scanDateTime: moment(trn.scanDateTime).format('YYYY-MM-DD HH:mm:ss'),
        };
        payload.push(obj);
      }
      await saveTranscations(payload);
      realm.write(() => {
        realm.deleteAll();
      });
      resolve({
        status: true,
      });
      realm.close();
    } catch (error) {
      console.log('ex=>', error);
      realm.close();
      return resolve({
        status: false,
      });
    }
  });
};
