import React from 'react';

export default function OtherInfo({ formData, setFormData }) {
  return (
    <div>
      OtherInfo Page
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(event) =>
          setFormData({ ...formData, nationality: event.target.value })
        }
      />
      <select
        name="Hobbies"
        value={formData.hobbies}
        onChange={(event) =>
          setFormData({ ...formData, hobbies: event.target.value })
        }
      >
        <option value="" disabled>
          Hobbies
        </option>
        <option value="Reading">Reading</option>
        <option name="Swimming">Swimming</option>
        <option name="Dancing">Dancing</option>
        <option value="Traveling">Traveling</option>
        <option value="Photography">Photography</option>
        <option value="Cooking">Cooking</option>
        <option value="Gardening">Gardening</option>
        <option value="Drawing">Drawing</option>
        <option value="Cycling">Cycling</option>
        <option value="Writing">Writing</option>
      </select>
    </div>
  );
}
