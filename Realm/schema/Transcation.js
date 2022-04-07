import Realm from 'realm';

class TranscationSchema extends Realm.Object {
  static schema = {
    name: 'Transcation',
    properties: {
      _id: 'string',
      empId: {type: 'int', indexed: true},
      empName: {type: 'string?'},
      empCardNo: {type: 'string?'},
      empCode: {type: 'string?'},
      menuId: 'int?',
      itemName: {type: 'string?'},
      scanDateTime: {type: 'date?', default: new Date()},
      isSyned: {type: 'bool', default: false},
    },
    primaryKey: '_id',
  };
}

export default TranscationSchema;
