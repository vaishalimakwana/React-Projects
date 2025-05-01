import React from 'react';

export default function PersonalInfo({ formData, setFormData }) {
  return (
    <div>
      PersonalInfo Page
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Age"
        value={formData.age}
        onChange={(event) =>
          setFormData({ ...formData, age: event.target.value })
        }
      />
      <select
        name="Gender"
        value={formData.gender}
        onChange={(event) =>
          setFormData({ ...formData, gender: event.target.value })
        }
      >
        <option value="" disabled>
          Gender
        </option>
        <option name="Male">Male</option>
        <option name="Female">Female</option>
      </select>
    </div>
  );
}
