import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaPhone, FaLock } from 'react-icons/fa6';
import { validatePassword, validateConfirmPassword } from '../../utils/validate';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const phoneNumber = location.state?.phoneNumber;
    const otpToken = location.state?.otpToken;

    // useEffect(() => {
    //     if (!phoneNumber || !otpToken) {
    //         toast.warn('Thiếu phoneNumber hoặc otpToken. Chuyển hướng về xác nhận số điện thoại.');
    //         navigate('/login', { replace: true });
    //     }
    // }, [phoneNumber, otpToken, navigate]);

    const validate = () => {
        const newErrors = {};
        const newPasswordError = validatePassword(newPassword);
        const confirmPasswordError = validateConfirmPassword(newPassword, confirmPassword);
        if (newPasswordError) newErrors.newPassword = newPasswordError;
        if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        console.log(newPassword);
        if (!validate()) return;
        navigate('/login');
        // setLoading(true);

        // try {
        //     const response = await axios.post('/auth/reset-password', {
        //         phoneNumber,
        //         otpToken,
        //         newPassword
        //     });

        //     toast.success(response.data?.message || 'Mật khẩu của bạn đã được đặt lại thành công!');
        //     navigate('/login');
        // } catch (err) {
        //     toast.error(err.response?.data?.message || 'Có lỗi xảy ra khi đặt lại mật khẩu. Vui lòng thử lại.')
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4 mt-2">Đặt lại mật khẩu</h2>
                <p className="text-center text-muted small mb-4">
                    Nhập mật khẩu mới của bạn.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="phoneNumberDisplay" className="form-label">Số điện thoại</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><FaPhone /></span>
                            <input
                                type="tel"
                                className="form-control border-start-0"
                                id="phoneNumberDisplay"
                                value={phoneNumber || ''}
                                readOnly
                                disabled
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    {/* Trường nhập Mật khẩu mới */}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
                            <span onClick={() => setShowNewPassword(!showNewPassword)} style={{ cursor: 'pointer' }}>
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><FaLock /></span>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                className={`form-control border-start-0 ${errors.newPassword ? 'is-invalid' : ''}`}
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                autoComplete='new-password'
                                required
                                disabled={loading}
                            />
                            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
                        </div>
                    </div>

                    {/* Trường nhập Xác nhận mật khẩu mới */}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới</label>
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><FaLock /></span>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={`form-control border-start-0 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete='new-password'
                                required
                                disabled={loading}
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark w-100 mb-3" disabled={loading}>
                        {loading ? 'Đang đặt lại...' : 'Đặt lại mật khẩu'}
                    </button>

                    <div className="mt-3 text-center">
                        <Link to="/login" className="text-muted text-decoration-underline small">Quay lại Đăng nhập</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;