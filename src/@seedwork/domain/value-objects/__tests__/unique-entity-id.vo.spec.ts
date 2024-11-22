import InvalidUuidError from "../../../errors/invalid-uuid.error"
import UniqueEntityId from "../unique-entity-id.vo"
import {validate as uuidValidate} from 'uuid'


describe('UniqueEntityId Unit tests', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    it('should throw error when uuid is invalid', () => {
        expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    })

    it ('should acccept a uuid passed in constructor', () => {
        const uuidTest = '152a4043-3220-4bc8-ad23-d3756e4be93c'
        const vo = new UniqueEntityId(uuidTest)
        expect(vo.value).toBe(uuidTest);
        expect(validateSpy).toHaveBeenCalled();
    })
    it ('should acccept a uuid passed in constructor', () => {
        const uuidTest = '152a4043-3220-4bc8-ad23-d3756e4be93c'
        const vo = new UniqueEntityId()
        expect(uuidValidate(vo.value)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalled();
    })
});

