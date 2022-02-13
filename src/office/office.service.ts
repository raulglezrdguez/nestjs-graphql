import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { v4 as uuid } from 'uuid';
import { CreateOfficeInput } from './office.input';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private officeRepository: Repository<Office>,
  ) {}

  async createOffice(createOfficeInput: CreateOfficeInput): Promise<Office> {
    const { name, startDate, endDate, persons } = createOfficeInput;
    let office = this.officeRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      persons,
    });
    office = await this.officeRepository.save(office);

    return office;
  }

  async getOffice(id: string): Promise<Office> {
    const office = await this.officeRepository.findOne({ id });
    if (!office) {
      throw new NotFoundException(`Office with id ${id} not found`);
    }
    return office;
  }

  async getAllOffices(): Promise<Office[]> {
    return await this.officeRepository.find();
  }

  async assignPersonsToOffice(
    officeId: string,
    personIds: string[],
  ): Promise<Office> {
    const office = await this.getOffice(officeId);
    office.persons = [...office.persons, ...personIds];
    return await this.officeRepository.save(office);
  }
}
