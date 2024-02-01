import { Question } from "@/interfaces/faq";

export const faq: Question[] = [
    {
        id: 1,
        name: "Joe",
        date: "1 Januari 2024",
        question: "Is there any discount for business trip?",
        answer: [
            {
                id: 1,
                name: "Admin Nginep",
                date: "2 Januari 2024",
                answer: "Yes, for full information please contact us on +62 21 123xxx"
            }
        ]
    },
    {
        id: 2,
        name: "Ted",
        date: "11 Januari 2024",
        question: "Is there any place that provides staycation include wedding party services ?",
        answer: [
            {
                id: 1,
                name: "Jane",
                date: "11 Januari 2024",
                answer: "Yes, I held a wedding party at a hotel in Bali. My whole family stayed there too"
            },
            {
                id: 2,
                name: "Admin Nginep",
                date: "12 Januari 2024",
                answer: "Yes, for full information please contact us on +62 21 123xxx. We can provide several options according to your needs."
            }
        ]
    },
    {
        id: 3,
        name: "Jane",
        date: "20 Januari 2024",
        question: "Thank you Nginep for providing our family staycation during our wedding party. All the best for you. - Broke & Jane -",
        answer: [
            {
                id: 1,
                name: "Admin Nginep",
                date: "30 Januari 2024",
                answer: "Thank you for trusting us Mr & Mrs Broke. Wish your marriage happily ever after."
            }
        ]
    }
]