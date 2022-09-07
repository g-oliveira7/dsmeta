import NotificationButton from '../NotificationButton';
import './style.css';

const SalesCard = () => {
    return (
        <div className="dsmeta-card">
            <div className="dsmeta-card-header">
                <h1>Vendas</h1>
                <input type="text" value="01/02/2022" />
                <input type="text" value="30/04/2022" />
            </div>

            <table className="dsmeta-card-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <td className="show992">Visitas</td>
                        <td className="show992">Vendas</td>
                        <th>Total</th>
                        <th>Nofiticar</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                    <tr>
                        <td className="show992">#413</td>
                        <td className="show576">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 53000.00</td>
                        <td><NotificationButton /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SalesCard;