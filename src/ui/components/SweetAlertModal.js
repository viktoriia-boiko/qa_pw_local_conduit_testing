import { BaseComponent } from './BaseComponent';

export class SweetAlertModal extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.container = page.locator('.swal-modal');
    this.title = page.locator('.swal-title');
    this.text = page.locator('.swal-text');
    this.confirmButton = page.locator('.swal-button--confirm');
  }

  async clickConfirmButton() {
    await this.step(
      `Click the 'OK' button in the confirmation modal`,
      async () => {
        await this.confirmButton.click();
      },
    );
  }
}
