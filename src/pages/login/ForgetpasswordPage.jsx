import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { validatePhone } from '../../utils/validate';

const ForgetPasswordPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        const phoneError = validatePhone(phoneNumber);
        if (phoneError) {
            setError(phoneError);
            return;
        }

        // setLoading(true);
        navigate('/reset-password', { state: { phoneNumber: phoneNumber } });
        // try {
        //     // const response = await axios.post('/auth/confirm-phone', { phoneNumber });

        //     toast.success('Mã OTP đã được gửi đến số điện thoại của bạn.(fe)')
        //     navigate('/reset-password', { state: { phoneNumber: phoneNumber } });

        // } catch (err) {
        //     // setError(err.response?.data?.message || '');
        //     toast.error('Không thể kết nối đến máy chủ. Vui lòng thử lại sau.');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4 mt-2">Quên mật khẩu</h2>
                <p className="text-center text-muted small mb-4">
                    Nhập số điện thoại đã đăng ký của bạn. Chúng tôi sẽ gửi một mã OTP để bạn đặt lại mật khẩu.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><FaPhone /></span>
                            <input
                                type="tel"
                                className={`form-control border-start-0 ${error ? 'is-invalid' : ''}`}
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                autoComplete='tel'
                                disabled={loading}
                            />
                        </div>
                        {error && <div className="invalid-feedback d-block">{error}</div>}
                    </div>

                    {message && <div className="alert alert-success text-center" role="alert">{message}</div>}


                    <button type="submit" className="btn btn-dark w-100 mb-3" disabled={loading}>
                        {loading ? 'Đang gửi...' : 'Gửi mã OTP'}
                    </button>
                    <div className="mt-3 text-center">
                        <Link to="/login" className="text-muted text-decoration-underline small">Quay lại Đăng nhập</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;