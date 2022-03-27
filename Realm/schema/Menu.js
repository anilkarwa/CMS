import Realm from 'realm';

class MenuSchema extends Realm.Object {
  static schema = {
    name: 'Menu',
    properties: {
      _id: 'string',
      menuId: {type: 'int', indexed: true},
      menuName: 'string?',
    },
    primaryKey: '_id',
  };
}

export default MenuSchema;
