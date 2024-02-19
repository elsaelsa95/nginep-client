export interface Question {
    id: number
    userId: number
    name: string
    date: string
    question: string
    answer: null | Answer[]
}

export interface Answer {
    id: number
    userId: number
    name: string
    date: string
    answer: string
}