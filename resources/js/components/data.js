import * as images from '../components/images';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const sliderContent = [
    {
        title: "Fueling Your Future",
        description: "Discover the power of high-quality fuels that keep your engines running longer and cleaner. Join the thousands of satisfied customers who trust us for their fuel needs.",
        buttonText: "Learn More",
        link: "#",
        image: images.cta,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Commit to a greener planet with our eco-friendly fuel options. Reduce emissions and protect the environment without compromising performance.",
        buttonText: "Explore More",
        link: "#",
        image: images.bannerImage,
    },
];

export const offerCard = [
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: images.bannerImage,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: images.bannerImage,
    },
    {
        title: "Eco-Friendly Fuels",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        date: "Offer valid from: 30/05/2024 - 03/07/2024",
        image: images.bannerImage,
    },
];

export const categoryList = [
    {
        link: "/fules",
        image: images.bannerImage,
        name: "Fuel",
    },
    {
        link: "/coffee",
        image: images.coffeeimage,
        name: "Coffee",
    },
    {
        link: "/hotfood",
        image: images.hotfood,
        name: "Food",
    },
    {
        link: "/swapandgogas",
        image: images.swapandgogas,
        name: "Swap and Go",
    },
    {
        link: "/Indian Food",
        image: images.indianpattern,
        name: "Indian Food",
    },
    {
        link: "/Baits",
        image: images.Baits,
        name: "Windy baits",
    },
    {
        link: "/krispy_cream",
        image: images.krispy_cream,
        name: "Doughnuts",
    },
    {
        link: "/icebags",
        image: images.icebag,
        name: "Ice Bags",
    },
];

export const serviceList = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
];

export const serviceListTwo = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
    },
];

export const carwash = [
    {
        title: "Car Wash",
        description: "Cadbury Medium Bar 30g - 60g varieties",
        image: images.cta,
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
        image: images.cta,
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
        image: images.cta,
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
        image: images.cta,
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