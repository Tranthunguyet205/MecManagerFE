import { Table,Container, Pagination, Form, Button } from "react-bootstrap";
import {useState} from "react"
function ListDoctor() {
    const [search, setSearch] = useState("")
    const doctors = [
        {name:"Nguyen Van A", CCHN: "CCHN/GPHN",sdt:"09029374",email:"exxample.@gamil.com",DVLV:"ha noi"},
        {name:"Nguyen Van A", CCHN: "CCHN/GPHN",sdt:"09029374",email:"exxample.@gamil.com",DVLV:"ha noi"},
        {name:"Nguyen Van A", CCHN: "CCHN/GPHN",sdt:"09029374",email:"exxample.@gamil.com",DVLV:"ha noi"}
    ]
    return (
        <div>
            <Container>
                <Form className="">
                    <div className="d-flex justify-between">
                        <Form.Group type="text"
                        placeholder="Tìm bác sĩ"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input-field  w-75"
                    />
                    <Button className="bn-sm">Tìm kiem</Button>
                    </div>
                </Form>
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Họ và tên</th>
                                <th>CCHN/GPHN</th>
                                <th>số điện thoại</th>
                                <th>email</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((row,id) => (
                                <tr key={id}>
                                    <td>{row.name}</td>
                                    <td>{row.CCHN}</td>
                                    <td>{row.sdt}</td>
                                    <td>{row.email}</td>
                                    <td>
                                        <button className="btn btn-outline-dark btn-sm">Xem chi tiết</button>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default ListDoctor;