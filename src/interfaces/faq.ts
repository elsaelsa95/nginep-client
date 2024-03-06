export interface Question {
    id: string
    userId: string
    name: string
    date: string
    question: string
    answer: null | Answer[]
}

export interface Answer {
    id: string
    userId: string
    name: string
    date: string
    answer: string
}