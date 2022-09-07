import { registerLocale } from "react-datepicker";

import ptBR from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';

import NotificationButton from '../NotificationButton';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";

registerLocale('ptBR', ptBR);

const SalesCard = () => {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState<Date>(min);
    const [maxDate, setMaxDate] = useState<Date>(max);

    return (
        <div className="dsmeta-card">
            <div className="dsmeta-card-header">
                <h1>Vendas</h1>
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-datepicker"
                    dateFormat="dd/MM/yyyy"
                    locale={ptBR} />

                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-datepicker"
                    dateFormat="dd/MM/yyyy"
                    locale={ptBR} />
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