import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model"

export class InMemoryDataBase implements InMemoryDbService {

    createDb() {

        const categories: Category[] = [
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