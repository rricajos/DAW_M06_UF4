class Usuario {
  constructor(id, nombre, primerApellido, email) {
      this._id = id;
      this._nombre = nombre;
      this._primerApellido = primerApellido;
      this._email = email;
  }

  // Getters
  get id() {
      return this._id;
  }

  get nombre() {
      return this._nombre;
  }

  get primerApellido() {
      return this._primerApellido;
  }

  get email() {
      return this._email;
  }

  // Setters
  set id(newId) {
      if (typeof newId === 'number' && newId > 0) {
          this._id = newId;
      } else {
          console.error('El ID debe ser un número positivo.');
      }
  }

  set nombre(newNombre) {
      if (typeof newNombre === 'string' && newNombre.trim().length > 0) {
          this._nombre = newNombre;
      } else {
          console.error('El nombre debe ser una cadena no vacía.');
      }
  }

  set primerApellido(newPrimerApellido) {
      if (typeof newPrimerApellido === 'string' && newPrimerApellido.trim().length > 0) {
          this._primerApellido = newPrimerApellido;
      } else {
          console.error('El primer apellido debe ser una cadena no vacía.');
      }
  }

  set email(newEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(newEmail)) {
          this._email = newEmail;
      } else {
          console.error('El email no es válido.');
      }
  }

  // Método para generar un objeto JSON a partir de la instancia
  toJSON() {
      return {
          id: this._id,
          nombre: this._nombre,
          primerApellido: this._primerApellido,
          email: this._email
      };
  }
}

// Ejemplo de uso:
// const usuario = new Usuario(4, 'Ana', 'Martínez', 'ana.martinez@example.com');

// Accediendo a las propiedades
// console.log(usuario.nombre); // "Ana"
// console.log(usuario.email);  // "ana.martinez@example.com"

// Actualizando propiedades con validación
// usuario.nombre = 'Anabel';
// usuario.email = 'anabel.martinez@example.com';

// Generando un objeto JSON
// console.log(usuario.toJSON());
// Salida: { id: 4, nombre: 'Anabel', primerApellido: 'Martínez', email: 'anabel.martinez@example.com' }
