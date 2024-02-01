export interface Question {
    id: number
    name: string
    date: string
    question: string
    answer: null | Answer[]
}

export interface Answer {
    id: number
    name: string
    date: string
    answer: string
}