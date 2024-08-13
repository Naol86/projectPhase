describe('Bookmark Button Functionality', () => {
  beforeEach(() => {
    // Set up any necessary intercepts, cookies, or visit the page before each test
    cy.visit('/api/auth/signin');

    // Fill in the email and password fields
    cy.get('#email').type('naolkasinet@gmail.com');
    cy.get('#password').type('@here1234');

    // Submit the form
    cy.get('#submit').click().as('login');
    cy.wait(6000);
    // cy.visit('/'); // Update this with the correct path
  });

  it('should toggle the bookmark state when clicked', () => {
    // Assuming the bookmark button has a data attribute 'data-bookmarked' to indicate its state

    // Get the first bookmark button and check its initial state
    cy.get('[data-id="bookmark-btn"]').first().should('have.attr', 'data-bookmarked', 'false');

    // Click the bookmark button
    cy.get('[data-id="bookmark-btn"]').first().click();
    cy.wait(6000);

    // Verify the bookmark state has toggled
    cy.get('[data-id="bookmark-btn"]').first().should('have.attr', 'data-bookmarked', 'true');

    // Click the bookmark button again to toggle back
    cy.get('[data-id="bookmark-btn"]').first().click();
    cy.wait(6000);

    // Verify the bookmark state has toggled back to the initial state
    cy.get('[data-id="bookmark-btn"]').first().should('have.attr', 'data-bookmarked', 'false');
  });
});
