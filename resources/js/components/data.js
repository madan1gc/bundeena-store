import { bannerImage, cta } from '../components/images';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const sliderContent = [
    {
        title: "Fueling Your Future",
        description: "Discover the power of high-quality fuels that keep your engines running longer and cleaner. Join the thousands of satisfied customers who trust us for their fuel needs.",
        buttonText: "Learn More",
        link: "#",
        image: cta,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Commit to a greener planet with our eco-friendly fuel options. Reduce emissions and protect the environment without compromising performance.",
        buttonText: "Explore More",
        link: "#",
        image: bannerImage,
    },
];

export const offerCard = [
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: bannerImage,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: bannerImage,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: bannerImage,
    },
];

export const categoryList = [
    {
        link: "#",
        image: bannerImage,
        name: "Fuel",
    },
    {
        link: "#",
        image: bannerImage,
        name: "Coffee",
    },
    {
        link: "#",
        image: bannerImage,
        name: "Food",
    },
    {
        link: "#",
        image: bannerImage,
        name: "Service",
    },
];

export const serviceList = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
];

export const serviceListTwo = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
    },
];

export const carwash = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
        list: [
            "Pre-wash",
            "Soft cloth wash and shampoo",
            "Underbody wash ",
            "Wheel Wash",
            "Foam Bath",
            "Spot free rinse",
        ]
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
        list: [
            "Pre-wash",
            "Soft cloth wash and shampoo",
            "Underbody wash ",
            "Wheel Wash",
            "Foam Bath",
            "Spot free rinse",
        ]
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
        list: [
            "Pre-wash",
            "Soft cloth wash and shampoo",
            "Underbody wash ",
            "Wheel Wash",
            "Foam Bath",
            "Spot free rinse",
        ]
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: cta,
        list: [
            "Pre-wash",
            "Soft cloth wash and shampoo",
            "Underbody wash ",
            "Wheel Wash",
            "Foam Bath",
            "Spot free rinse",
        ]
    },
]

export const useProductData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = '/api/product';
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    return data;
};