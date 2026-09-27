import { Injectable, Logger } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  async submit(dto: CreateContactDto) {
    // Placeholder: wire this up to your CRM, email provider, or database.
    this.logger.log(`New contact request from ${dto.email}`);
    return { received: true };
  }
}
