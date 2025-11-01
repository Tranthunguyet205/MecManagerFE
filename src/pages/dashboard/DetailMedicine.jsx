import Header from "../../components/header/Header";
import MedicineForm from "../../components/medicine/MedicineForm";
function DetailMedicine() {

    return (
        <div className="d-flex flex-column">
            <Header title={"CHI TIẾT ĐƠN THUỐC"} />
            <MedicineForm mode="detail" />
        </div>
    );
}

export default DetailMedicine;