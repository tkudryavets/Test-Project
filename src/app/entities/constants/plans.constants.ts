export interface IDay {
    date: string | Date,
    advent: string,
    participants: string[]
}
export let plans: IDay[] = [
    {
        date: 'December 12, 2022',
        advent: 'День рождения',
        participants: ['Антон Маркс']
    },
    {
        date: 'December 13, 2022',
        advent: '',
        participants: []
    }
]