import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { ContactModule } from "./contact/contact.module";

@Module({
  imports: [HealthModule, ContactModule],
})
export class AppModule {}
