export function validatePhone(phone) {
    const cleaned = phone.replace(/\s+/g, '').trim();
    if (!cleaned) return 'Vui lòng nhập số điện thoại';
    if (!/^0\d{9}$/.test(cleaned)) return 'Số điện thoại không hợp lệ (10 chữ số và bắt đầu bằng 0)';
    return '';
}

export function validatePassword(password) {
    if (!password) return 'Vui lòng nhập mật khẩu';
    if (password.length < 6) return 'Mật khẩu phải tối thiểu ký tự';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?/\\]).{6,}/.test(password)) {
        return 'Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự đặc biệt';
    }
    return '';
}
export function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        return 'Xác nhận mật khẩu không được để trống.';
    }
    if (password !== confirmPassword) {
        return 'Mật khẩu xác nhận không khớp.';
    }
    return '';
};
export function validateName(name) {
    if (!name.trim()) return 'Vui lòng nhập họ tên';
    if (!/^[A-Za-zÀ-ỹ0-9\s]+$/.test(name.trim())) return 'Tên không hợp lệ (chỉ chứa chữ, số và khoảng trắng)';
    return '';
}
export function validateCommon(value) {
    if (!value || !value.toString().trim()) return 'Vui lòng nhập dữ liệu.';
    return '';
}