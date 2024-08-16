import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'mi-tabla',
  styleUrl: 'mi-tabla.css',
  shadow: true,
})
export class MiTabla {
  // La propiedad 'apiUrl' me permite recibir la URL de la API desde la cual obtendré los datos
  @Prop() apiUrl: string; 
  
  // Utilizo 'data' como un estado interno para almacenar los datos que recibiré de la API
  @State() data: any[] = []; 

  // Este ciclo de vida se ejecuta antes de que el componente sea renderizado
  componentWillLoad() {
    // Aquí llamo a la función 'fetchData' para obtener los datos antes de que la tabla sea mostrada en pantalla
    this.fetchData();
  }

  // Esta función se encarga de realizar la solicitud a la API y almacenar la respuesta en 'data'
  async fetchData() {
    try {
      // Realizo la solicitud 'fetch' a la URL proporcionada en 'apiUrl'
      const response = await fetch(this.apiUrl);
      const result = await response.json();

      // Almaceno los datos recibidos en el estado 'data'
      this.data = result;
    } catch (error) {
      // Si algo sale mal, imprimo el error en la consola
      console.error('Error fetching data:', error);
    }
  }

  // Aquí es donde renderizo la tabla utilizando los datos que ya tengo en 'data'
  render() {
    return (
      <table>
        <thead>
          <tr>
            {/* Defino los encabezados de la tabla; estos deben coincidir con los campos de los datos que recibo */}
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {/* Recorro los datos recibidos para generar una fila por cada elemento */}
          {this.data.map(item => (
            <tr>
              {/* Aquí es donde muestro los valores individuales de cada campo */}
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.mail}</td>
              <td>{item.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
