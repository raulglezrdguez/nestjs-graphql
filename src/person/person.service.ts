import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonInput } from './create-person.input';
import { Person } from './person.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async createPerson(createPersonInput: CreatePersonInput): Promise<Person> {
    const { name, birthDate } = createPersonInput;

    let person = this.personRepository.create({
      id: uuid(),
      name,
      birthDate,
    });
    person = await this.personRepository.save(person);

    return person;
  }

  async getPerson(id: string): Promise<Person> {
    const person = await this.personRepository.findOne({ id });
    if (!person) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }
    return person;
  }

  async getAllPersons(): Promise<Person[]> {
    return await this.personRepository.find();
  }
}
