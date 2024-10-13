import { LocaleType } from "locales/ru";

export const en: LocaleType = {
    test: "Lorem Ipsum is simply dummy text of the printing",
    charactersPage: {
        title: "Character page",
    },
    locationsPage: {
        title: "Location page",
    },
    characterPage: {
        getDescription(name: string, species: string) {
            return `The character ${name} belongs to the variety ${species}`;
        },
    },
};
