import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ARTICLE_PUBLISH_FAILED_MESSAGE } from '../../../src/ui/constants/articleErrorMessages';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Creat an article without required fields', async ({
  internalHomePage,
  createArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.clickPublishArticleButton();
  await createArticlePage.assertErrorMessageContainsText(
    ARTICLE_PUBLISH_FAILED_MESSAGE,
  );
});
