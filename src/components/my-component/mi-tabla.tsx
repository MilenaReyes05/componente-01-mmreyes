import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'mi-tabla',
  styleUrl: 'mi-tabla.css',
  shadow: true,
})
export class MiTabla {
  @Prop() apiUrl: string; // URL de la API que se recibirá como prop
  @State() data: any[] = []; // Estado para almacenar los datos recibidos

  // Ciclo de vida que se ejecuta cuando el componente se ha conectado al DOM
  componentWillLoad() {
    // Realizar la solicitud a la API
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      const result = await response.json();
      this.data = result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {/* Ajusta los encabezados según los campos de tu API */}
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {/* Ajusta las celdas según los campos de tu API */}
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
