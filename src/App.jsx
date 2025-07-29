import React from 'react';
import "./style.css";

const App = () => {

    const book = [
        {
            name: "Elements of Electrical Engineering",
            writer: "katter J.S",
            price: "355",
            year: "2000"
        },
        {
            name: " Computer Programming and Utilization",
            writer: "padmvar N",
            price: "335",
            year: "2004"
        },
        {
            name: " Elements of Mechanical Engineering ",
            writer: "SINGHAR B.L",
            price: "310",
            year: "2003"

        },
        {
            name: "Engineering Graphics",
            writer: "arunoday kumar",
            price: "345",
            year: "2001"
        },
        {
            name: "Basic Electronics",
            writer: "latre j.s",
            price: "335",
            year: "2005"
        },
    ];
    const movie = [
        {
            name: "Hanuman ",
            director: " V.G. Samant",
            budget: "₹4.5 crore ",
            year: "2005"

        },

        {
            name: "Bal Ganesh ",
            director: " Pankaj Sharma ",
            budget: "₹3 crore",
            year: "2007"

        },


        {
            name: "Krishna Aur Kans",
            director: "Vikram Veturi",
            budget: " ₹8 crore",
            year: "2012"

        },


        {
            name: "Chhota Bheem & Krishna",
            director: "Rajiv Chilaka",
            budget: "₹3 crore ",
            year: "2008"

        },

        {
            name: " Ramayana: The Epic",
            director: " Chetan Desai",
            budget: "₹7 crore",
            year: "2010"

        },
    ]
    const final = [...book, ...movie];


    return (
        <>


            {
                final.map((data, index) => (
                    <div
                        key={index}
                        style={{
                            border: `3px solid ${data.type === "book" ? "blue" : "red"}`,
                            padding: "10px",
                            margin: "10px"
                        }}
                    >
                        <h2>Name: {data.name}</h2>
                        <h2>{data.writer ? `Writer: ${data.writer}` : `Director: ${data.director}`}</h2>
                        <h2>{data.price ? `Price: ₹${data.price}` : `Budget: ${data.budget}`}</h2>
                        <h2>Year: {data.year}</h2>
                    </div>
                ))
            }


        </>
    );
};

export default App;
