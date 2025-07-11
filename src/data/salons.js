// src/data/salons
const salons = [
            {
                id: 1,
                name: "Glamour Salon",
                location: "Mavoor Road, Kozhikode",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500",
                services: [
                    { name: "Haircut", price: 300 },
                    { name: "Facial", price: 500 },
                    { name: "Hair Spa", price: 700 },
                    { name: "Bridal Makeup", price: 2500 }
                ]
            },
            {
                id: 2,
                name: "Style Hub",
                location: "Beach Road, Kozhikode",
                rating: 4.2,
                image: "https://images.squarespace-cdn.com/content/v1/56966c9fa976af028c273fcd/1653862743975-IX2DUOU09G20WTXYYC47/view+of+barber+stations+and+barber+chairs+at+house+of+shaves+barbershop+in+jaclsonville+florida.jpg?format=1000w",
                services: [
                    { name: "Haircut", price: 250 },
                    { name: "Facial", price: 450 },
                    { name: "Hair Spa", price: 650 },
                    { name: "Coloring", price: 1200 }
                ]
            },
            {
                id: 3,
                name: "Urban Cuts",
                location: "Thondayad, Kozhikode",
                rating: 4.8,
                image: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1040281/biz_photo/7371a149eed441a0ae605184550386-bushwick-barbershop-biz-photo-85dd822b5a9a4d6aa15a407013a7c8-booksy.jpeg?size=640x427",
                services: [
                    { name: "Haircut", price: 350 },
                    { name: "Facial", price: 550 },
                    { name: "Hair Spa", price: 800 },
                    { name: "Beard Trim", price: 200 }
                ]
            },
            {
                id: 4,
                name: "Royal Touch",
                location: "Palayam, Kozhikode",
                rating: 4.6,
                image: "data:image/jpeg;base64,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",
                services: [
                    { name: "Haircut", price: 400 },
                    { name: "Gold Facial", price: 1200 },
                    { name: "Hair Treatment", price: 1500 },
                    { name: "Manicure", price: 300 }
                ]
            },
            {
                id: 5,
                name: "Lakme Salon",
                location: "HiLite Mall, Kozhikode",
                rating: 4.7,
                image: "https://cdn.prod.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp",
                services: [
                    { name: "Haircut", price: 500 },
                    { name: "Diamond Facial", price: 1800 },
                    { name: "Hair Spa", price: 1000 },
                    { name: "Pedicure", price: 400 }
                ]
            },
            {
                id: 6,
                name: "Nature's Spa",
                location: "Pottammal, Kozhikode",
                rating: 4.9,
                image: "https://trafft.com/wp-content/uploads/2021/04/barber-design-header-768x512.jpg",
                services: [
                    { name: "Ayurvedic Facial", price: 800 },
                    { name: "Hair Spa", price: 900 },
                    { name: "Body Massage", price: 1200 },
                    { name: "Herbal Treatment", price: 1500 }
                ]
            },

            {
    id: 7,
    name: "Elite Looks",
    location: "Kallai Road, Kozhikode",
    rating: 4.4,
    image: "https://images.squarespace-cdn.com/content/v1/5fd160f566f1594660675943/1607558684085-4U4JFUY6PD6ZX57NK54Z/Delmar+shop.JPG?format=1500w",
    services: [
        { name: "Haircut", price: 300 },
        { name: "Shaving & Beard Trim", price: 200 },
        { name: "Hair Coloring", price: 1000 },
        { name: "Facial", price: 600 }
    ]
},
{
    id: 8,
    name: "Glow & Shine Beauty Lounge",
    location: "West Hill, Kozhikode",
    rating: 4.6,
    image: "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4738246540844/Djoeragan-Barbershop-e0bf0f9d-2632-40fc-a1b1-d056545b6442.jpeg?_src=imagekit&tr=c-at_max,h-250,q-100,w-412",
    services: [
        { name: "Gold Facial", price: 1200 },
        { name: "Body Polishing", price: 1800 },
        { name: "Hair Spa", price: 850 },
        { name: "Bridal Makeup", price: 3000 }
    ]
},
{
    id: 9,
    name: "Barber Bros",
    location: "Vellayil, Kozhikode",
    rating: 4.3,
    image: "https://www.shutterstock.com/image-photo/barber-shop-chair-mirror-business-600nw-2465373327.jpg",
    services: [
        { name: "Haircut", price: 250 },
        { name: "Beard Design", price: 180 },
        { name: "Hair Wash", price: 150 },
        { name: "Scalp Massage", price: 300 }
    ]
}

        ];
export default salons;
