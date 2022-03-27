import Realm from 'realm';

class EmployeeSchema extends Realm.Object {
  static schema = {
    name: 'Employee',
    properties: {
      _id: 'string',
      empId: {type: 'int', indexed: true},
      empCode: 'string?',
      empName: 'string?',
      empCardNo: 'string?',
    },
    primaryKey: '_id',
  };
}

export default EmployeeSchema;
