import UniqueEntityId from "../../../@seedwork/domain/unique-entity-vo"
import { Category, CategoryProperties } from "./category"
import {omit} from 'lodash'



describe ("Category of test", () => {

    test("constructor of category", () => {
        let category: Category = new Category ({
            name: "Movie"
        })
        let props= omit(category.props, 'created_at')
        let created_at: Date = new Date()
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active:true,
        })
        expect(category.props.created_at).toBeInstanceOf(Date)


        category  = new Category({
            name:"Movie",
            is_active: false,
            description:"some description",
            created_at
        })
        expect(category.props).toStrictEqual({
            name:"Movie",
            is_active: false,
            description:"some description",
            created_at
        })
        category = new Category({
            name: "Movie",
            description:"some description"
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            description:"some description"
        })
        category = new Category({
            name: "Movie",
            created_at
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            created_at
        })
        
    })

    test("getter of name field", () => {
        const category: Category = new Category({name:"Movie"})
        expect(category.name).toBe("Movie")
    
    })

    test("testing id uuid", () => {
    type CategoryData = {props: CategoryProperties, id?:UniqueEntityId}
    const data: CategoryData[] = [
        {props: {name:"Movie"}},
        {props: {name:"Movie"},id: null},
        {props: {name:"Movie"},id: undefined},
        {props: {name:"Movie"},id: new UniqueEntityId()}
    ]
    data.forEach((i) => {
        const id = new UniqueEntityId()
        const category = new Category(i.props, i.id as any)
        expect(category.id).not.toBeNull()
        expect(category.id).toBeInstanceOf(UniqueEntityId)

    }) 

    })

    
    test("getter and setter description field", () => {
        const category: Category = new Category({name:"Movie", description:"some description"})
        expect(category.descripition).toBe("some description")
        
    })
    
    test("getter and setter description field", () => {
        const category: Category = new Category({name:"Movie"})
        expect(category.descripition).toBeNull()
        
    })
    
    test("getter and setter is_active field", () => {
        const category: Category = new Category({name:"Movie", is_active:false})
        expect(category.is_active).toBeFalsy()
        
    })
    
    test("getter and setter is_active field", () => {
        const category: Category = new Category({name:"Movie"})
        expect(category.is_active).toBeTruthy()
        
    })  

})



