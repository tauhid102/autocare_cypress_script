class HomePage {
    visitHomePage() {
      cy.visit('https://autocare.com.bd/');
    }
  
    clickAboutLink() {
      cy.get(':nth-child(1) > .font-inter').click();
    }
  
    clickBecomeSellerButton() {
      cy.get(':nth-child(3) > .font-inter').click();
    }
  
    clickLanguageDropdown() {
      cy.get("div[class='flex gap-1 items-center']").click();
    }
  
    selectLanguage(language) {
      cy.contains(language).click();
    }
  
    login(username, password) {
      cy.get("button[class='flex items-center gap-2 border-2 px-5 py-2 rounded-lg bg-white border-white shadow-[0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)] text-[#0F766D] font-bold']").click();
      cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").type(username);
      cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > button:nth-child(3)").click();
      cy.get("#password").type(password);
      cy.get("div[class='relative bg-[#F1F4F6] p-4 sm:p-12 border-[5px] border-white rounded-3xl shadow '] div div button[type='submit']").click();
    }
  
    clickCartIcon() {
      cy.get("div[class='flex items-center gap-1.5'] ul[class='flex items-center gap-7'] img").click();
    }
  
    verifyEmptyCartMessage(expectedMessage) {
      cy.get("h4[class='text-center text-[#09090B] text-base font-semibold']")
        .should('contain', expectedMessage)
        .and('be.visible');
    }
  
    typeInSearchBar(query) {
      cy.get('.gap-10 > .flex-grow > .flex > .flex-1 > #first_name').type(query);
    }
  
    verifySearchSuggestions(expectedText) {
      cy.get(".absolute.bg-white.rounded-lg.p-2.category-shadow.w-full.mt-1.z-10")
        .scrollIntoView()
        .should('contain', expectedText);
    }
  
    clickBlogLink() {
      cy.get("body > section:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click();
    }
  
    clickHamburgerMenu() {
      cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > svg:nth-child(1)").click(); // Simplify the selector
    }
  
    verifyHamburgerMenuOption(optionText) {
      cy.contains(optionText).should('be.visible');
    }
  }
  
  export default HomePage;
  