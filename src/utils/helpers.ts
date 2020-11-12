import { Employee } from "../types/Employee";

const Alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

export const groupByAlphabetArr = <P, T extends { [key: string]: string }>(
    items: T[],
    prop: keyof T
): Array<{ letter: string; items: T[] }> =>
    Alphabet.map((l) => {
        const letter = l.toLowerCase();
        return {
            letter,
            items: items.filter(
                (item) => item[prop][0].toLowerCase() === letter
            ),
        };
    });

export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const groupByBdayArr = (
    items: Employee[]
): Array<{ monthIndex: number; items: Employee[] }> =>
    Months.map((month, index) => ({
        monthIndex: index,
        items: items.filter((item) => item.dob.getUTCMonth() === index),
    })).filter((item) => item.items.length > 0);

export const formatDate = (date: Date): string =>
    `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`;

export const getSeasonByMonth = (mIndex: number): string =>
    ["winter", "spring", "summer", "autumn"][Math.floor((mIndex + 1) / 3) % 4];
