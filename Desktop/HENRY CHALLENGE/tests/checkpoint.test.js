/* eslint-disable no-undef */
const {
  sumArray,
  menorMayor,
  stringMasLarga,
  buscarAmigo,
  pluck,
  crearClasePersona,
  filtrar
} = require('../checkpoint.js');

var personas =[
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      { 
        nombre: 'Martin',
      },{
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

describe('Funciones', function() {
  describe('menorMayor', function() {
    it('should return [1, 10] for [1,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 10]);
    });
    it('should return [-10, 10] for [-10,2,3,4,5,6,7,8,9,10]', function() {
      expect(menorMayor([-10,2,3,4,5,6,7,8,9,10])).toEqual([-10, 10]);
    });
     it('should return [1, 10] for [10, 1]', function() {
      expect(menorMayor([10, 1])).toEqual([1, 10]);
    });
  });

  describe('stringMasLarga', function() {
    it('should return "guten tag"', function() {
      expect(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag'])).toBe('guten tag');
    });
    it('should return "JavaScript"', function() {
      expect(stringMasLarga(['JavaScript', 'HTML', 'CSS'])).toBe('JavaScript');
    });
  });

  describe('buscarAmigo', function() {
    var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];

    it('should return "{ nombre: "toni", edad: 33 }"', function() {
      expect(buscarAmigo(amigos, 'toni').nombre).toBe('toni');
    });
    it('should return "{ nombre: "toni", edad: 33 }"', function() {
      expect(buscarAmigo(amigos, 'Emi').nombre).toBe('Emi');
    });
  });

  describe('sumArray', function() {
    it('should return true with [2,5,7,10,11,15,20], 2 + 11 = 13', function() {
      expect(sumArray([2,5,7,10,11,15,20], 13)).toBe(true);
    });
    it('should return false.', function() {
      expect(sumArray([2,5,7,10,11,15,20], 14)).toBe(false);
    });
    it('should return false (cant sum the same number with itself)', function() {
      expect(sumArray([2,5,7,10,11,15,20], 4)).toBe(false);
    });
  });
  
  describe('pluck', function() {
    var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    it('should return ["TV LCD", "Computadora"]', function() {
      expect(pluck(productos, 'name')).toEqual(['TV LCD', 'Computadora']);
    });
    it('should return [100, 500]', function() {
      expect(pluck(productos, 'price')).toEqual([100, 500]);
    });
  });
});

describe('Clase', function() {
  describe('crearClasePersona', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        expect(persona.nombre).toBe('toni');
        expect(persona.edad).toBe(23);
        expect(persona.hobbies).toEqual(['futbol']);
        expect(persona.amigos).toEqual([{nombre:'martin', edad: 31}]);
    });
    it('should add a friend with addFriend', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addFriend('Leo', 45);
        expect(persona.amigos[1]).toEqual({ nombre: 'Leo', edad: 45});
    });
    it('should add a hobbie with addHobby', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addHobby('hobbie');
        expect(persona.hobbies[1]).toBe('hobbie');
    });
    it('should get all friends with getFriends', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]);
      expect(persona.getFriends()).toEqual(['martin','toni']);
    });
    it('should get all hobbies with getHobbies', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
      expect(persona.getHobbies()).toEqual(['futbol']);
    });
    it('should get age average with getPromedioEdad', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{
          nombre: 'toni',
          edad: 33,
        }, {
          nombre: 'Emi',
          edad: 25
        }]);
      expect(persona.getPromedioEdad()).toBe(29);
    });
  });
});

describe('Extra Credit', function() {
  describe('Filter', function() {
    filtrar();
    it('should filter', function() {
      expect(personas.filtrar(p => p.edad <= 22).length).toBe(2);
    })
    it('should filter ok', function() {
      expect(personas.filtrar(p => p.edad > 50).length).toBe(0);
    })
  })
});