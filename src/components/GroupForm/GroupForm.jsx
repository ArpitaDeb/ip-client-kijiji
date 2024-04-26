import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./GroupForm.scss";
const SERVER_URL = process.env.REACT_APP_API_URL;

const AddGroupForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        category: "",
        tags: "",
        privacy: "",
        description: "",
        doNotSellItems: false,
    });

   

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newFormObj ={
                name: formData.name,
                location: formData.location,
                category: formData.category,
                tags: formData.tags,
                privacy: formData.privacy,
                description: formData.description,
      
            }
            console.log(newFormObj)
            const response = await axios.post(`${SERVER_URL}/groups`, newFormObj);
            console.log("Form submitted successfully", response.data);
            navigate(`/groupsList`);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleChange = (event) => {
        const { name, location, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
            [location]: newValue,
        });
    };

    const isSubmitDisabled = () => {
        return !formData.doNotSellItems;
    };

    return (
        <div className="add-group">
            <form className="add-group__form" onSubmit={handleSubmit}>
                <div className="add-group__container-left">
                    <div className="add-group__name">
                        <label className="add-group__label">Group Name:</label>
                        <input
                            className="add-group__input"
                            type="text"
                            placeholder="Group Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="add-group__location">
                        <label className="add-group__label">Location:</label>
                        <input
                            className="add-group__input"
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="add-group__category">
                        <label className="add-group__label">Category:</label>
                        <select
                            className="add-group__select"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select category</option>
                            <option value="Category 1">Technology & Gadgets</option>
                            <option value="Category 2">Travel & Adventure</option>
                            <option value="Category 3">Fashion & Style</option>
                            <option value="Category 4">Home Decor & Interior Design</option>
                            <option value="Category 5">Health & Wellness</option>
                            <option value="Category 6">Finance & Investment</option>
                            <option value="Category 7">Sports & Fitness</option>
                            <option value="Category 8">Art & Design</option>
                            <option value="Category 9">Music & Entertainment</option>
                            <option value="Category 10">Science & Innovation</option>
                        </select>
                    </div>
                    <div className="add-group__tag">
                        <label className="add-group__label">Tags or Keywords:</label>
                        <input
                            className="add-group__input"
                            type="text"
                            placeholder="Tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="add-group__privacy">
                        <label className="add-group__label">Privacy:</label>
                        <select
                            className="add-group__select"
                            name="privacy"
                            value={formData.privacy}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select privacy</option>
                            <option value="private">private</option>
                            <option value="public">public</option>
                        </select>
                    </div>
                </div>
                <div className="add-group__container-right">
                    <div className="add-group__description">
                        <label className="add-group__label">Description:</label>
                        <textarea
                            className="add-group__textarea"
                            placeholder="Description about your group"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="add-group__do-not-sell">
                        <label className="add-group__checkbox">
                            <input
                                type="checkbox"
                                name="doNotSellItems"
                                checked={formData.doNotSellItems}
                                onChange={handleChange}
                            />
                            I acknowledge that selling items in this group will result in the group being deleted and my account being banned.
                        </label>
                    </div>
                    <button
                        className="add-group__button"
                        type="submit"
                        disabled={isSubmitDisabled()}
                    >
                        Add New Group
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddGroupForm;
