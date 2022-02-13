import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private officeRepository: Repository<Office>,
  ) {}

  async createOffice(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Office> {
    let office = this.officeRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    office = await this.officeRepository.save(office);

    return office;
  }
}
