import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";


export interface CategoryProperties {
    name:string;
    description?:string;
    is_active?:boolean;
    created_at?:Date;
}


export class Category {

    public readonly id: UniqueEntityId;

    constructor(public readonly props: CategoryProperties, id?:UniqueEntityId) {
        this.id = id || new UniqueEntityId()
        this.props.description = this.props.description ?? null;
        this.props.is_active = this.props.is_active ?? true;
        this.props.created_at = this.props.created_at ?? new Date();
    }


    get name () {
        return this.props.name
    }

    get descripition() {
        return this.props.description
    }

    private set description(value: string) {
       this.props.description = value ?? null 
    }

    get is_active() {
        return this.props.is_active
    }

    private set is_active(value:boolean) {
        this.props.is_active = value ?? null
    }

    get created_at() {
        return this.props.created_at
    }
    private set created_at(value:Date) {
        this.props.created_at = value ?? new Date()
    }
 }

