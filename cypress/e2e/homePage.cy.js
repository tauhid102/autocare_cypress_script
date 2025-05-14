import HomePage from '../support/pageObject';

const homePage = new HomePage();

describe('Header Navigation Tests', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.viewport(1280, 720);
    homePage.visitHomePage();
  });

  it('Verify navigation to About page', () => {
    homePage.clickAboutLink();
    cy.url().should('include', '/about');
  });

  it('Validate functionality of Become a Seller button', () => {
    homePage.clickBecomeSellerButton();
    cy.url().should('include', '/become-seller');
  });

  it('Check the language selection dropdown', () => {
    homePage.clickLanguageDropdown();
    homePage.selectLanguage('Bangla');
  });

  it('Test cart functionality for an empty cart', () => {
    homePage.login(username, password);
    homePage.clickCartIcon();
    homePage.verifyEmptyCartMessage('There are no items in this cart');
  });

  it('Test search bar autofill feature', () => {
    homePage.typeInSearchBar('SUV');
    homePage.verifySearchSuggestions('SUV');
  });

  it('Verify Blog & News navigation', () => {
    homePage.clickBlogLink();
    cy.url().should('include', '/blog');
  });

  it('Test hamburger menu functionality', () => {
    homePage.clickHamburgerMenu();
    homePage.verifyHamburgerMenuOption('Audio & Entertainment');
  });
});
