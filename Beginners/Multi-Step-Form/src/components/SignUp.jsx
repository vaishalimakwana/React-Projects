import React, { useEffect, useState, useCallback } from 'react';

export default function SignUp({ formData, setFormData, setIsValid }) {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = useCallback(() => {
    return (
      validateEmail(formData.email) &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword
    );
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    const newErrors = { ...errors };

    if (field === 'email') {
      newErrors.email = validateEmail(value) ? '' : 'Invalid email address';
    }

    if (field === 'password') {
      newErrors.password =
        value.length >= 6 ? '' : 'Password must be at least 6 characters';
    }

    if (field === 'confirmPassword') {
      newErrors.confirmPassword =
        value === formData.password ? '' : 'Passwords do not match';
    }

    // Revalidate confirmPassword if password changes
    if (field === 'password' && formData.confirmPassword) {
      newErrors.confirmPassword =
        value === formData.confirmPassword ? '' : 'Passwords do not match';
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    setIsValid(validateForm());
  }, [validateForm, setIsValid]);

  return (
    <div>
      <h2>SignUp Page</h2>

      <input
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => handleChange('confirmPassword', e.target.value)}
      />
      {errors.confirmPassword && (
        <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
      )}
    </div>
  );
}
