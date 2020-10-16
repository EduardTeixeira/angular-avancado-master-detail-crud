import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataBase implements InMemoryDbService {

    createDb() {

        const categories = [
            {
                id: 1,
                name: "teste",
                description: "teste descript",
            },
            {
                id: 2,
                name: "moda",
                description: "descript para moda",
            },
            {
                id: 1,
                name: "saúde",
                description: "descript para saúde",
            },
        ]

        return { categories };

    }

}