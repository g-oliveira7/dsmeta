import { registerLocale } from "react-datepicker";

import ptBR from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';

import NotificationButton from '../NotificationButton';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

registerLocale('ptBR', ptBR);

const SalesCard = () => {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState<Date>(min);
    const [maxDate, setMaxDate] = useState<Date>(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const dmin = minDate.toISOString().split("T")[0];
        const dmax = maxDate.toISOString().split("T")[0];

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(resp => {
                setSales(resp.data.content);
            })
    }, [minDate, maxDate]);

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
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td className="show992">#{sale.id}</td>
                                <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                <td>{sale.sellerName}</td>
                                <td className="show992">{sale.visited}</td>
                                <td className="show992">{sale.deals}</td>
                                <td>R$ {sale.amount.toFixed(2)}</td>
                                <td><NotificationButton /></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default SalesCard;