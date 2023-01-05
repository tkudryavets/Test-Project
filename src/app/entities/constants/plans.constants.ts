export interface IDay {
    date: string | Date,
    advent: string,
    participants: string
}
export let plans: IDay[] = [
    {
        date: 'January 12, 2023',
        advent: 'День рождения',
        participants: 'Антон Маркс'
    },
    {
        date: 'December 13, 2022',
        advent: '',
        participants: ''
    }
]