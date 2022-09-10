import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/request";
import "./style.css";

type Props = {
    saleId: number;
}

const handleClick = (id: number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(resp => {
            toast.info("SMS enviado com sucesso.")
        });
}

const NotificationButton = ({ saleId }: Props) => {
    return <button className="dsmeta-notify-button" onClick={() => handleClick(saleId)}></button>
}

export default NotificationButton;