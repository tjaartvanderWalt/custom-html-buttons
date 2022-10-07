import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("should render default button", () => {
    render(<Button>Default Button</Button>);
    // assert that we find the button by text
    const button = screen.getByText("Default Button");
    // assert that the default CSS class is the bootstrap default class
    expect(button).toHaveClass("bs-btn");
    // assert that the default button does not contain any outline variations
    expect(button).not.toHaveClass("bs-btn-primary--outline");
    expect(button).not.toHaveClass("bs-btn-secondary--outline");
    expect(button).not.toHaveClass("bs-btn-success--outline");
    expect(button).not.toHaveClass("bs-btn-danger--outline");
    // assert that the default size does not contain the small variation
    expect(button).not.toHaveClass("bs-btn--small");
    // assert that the default size does not contain the large variation
    expect(button).not.toHaveClass("bs-btn--large");
  });

  describe("bootstrap", () => {
    it("should render default button", () => {
      render(<Button type="bootstrap">Bootstrap Button</Button>);
      // assert that we find the button by text
      const button = screen.getByText("Bootstrap Button");
      // assert that the default bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn");
    });

    it("should render primary button", () => {
      render(
        <Button type="bootstrap" color="primary">
          Primary Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Primary Bootstrap Button");
      // assert that the primary bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-primary");
    });

    it("should render secondary button", () => {
      render(
        <Button type="bootstrap" color="secondary">
          Secondary Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Secondary Bootstrap Button");
      // assert that the secondary bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-secondary");
    });

    it("should render success button", () => {
      render(
        <Button type="bootstrap" color="success">
          Success Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Success Bootstrap Button");
      // assert that the success bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-success");
    });

    it("should render danger button", () => {
      render(
        <Button type="bootstrap" color="danger">
          Danger Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Danger Bootstrap Button");
      // assert that the danger bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-danger");
    });

    it("should render default-outline button", () => {
      render(
        <Button type="bootstrap" isOutline>
          Default Outline Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Default Outline Bootstrap Button");
      // assert that the primary bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn--outline");
    });

    it("should render primary-outline button", () => {
      render(
        <Button type="bootstrap" color="primary" isOutline>
          Primary Outline Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Primary Outline Bootstrap Button");
      // assert that the primary bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-primary--outline");
    });

    it("should render secondary-outline button", () => {
      render(
        <Button type="bootstrap" color="secondary" isOutline>
          Secondary Outline Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Secondary Outline Bootstrap Button");
      // assert that the secondary bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-secondary--outline");
    });

    it("should render success-outline button", () => {
      render(
        <Button type="bootstrap" color="success" isOutline>
          Success Outline Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Success Outline Bootstrap Button");
      // assert that the success bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-success--outline");
    });

    it("should render danger-outline button", () => {
      render(
        <Button type="bootstrap" color="danger" isOutline>
          Danger Outline Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Danger Outline Bootstrap Button");
      // assert that the danger bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn-danger--outline");
    });

    it("should render small size", () => {
      render(
        <Button type="bootstrap" size="small">
          Small Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Bootstrap Button");
      // assert that the small bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn--small");
    });

    it("should render large size", () => {
      render(
        <Button type="bootstrap" size="large">
          Large Bootstrap Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Large Bootstrap Button");
      // assert that the large bootstrap CSS class is added
      expect(button).toHaveClass("bs-btn bs-btn--large");
    });
  });

  describe("material", () => {
    it("should render default button", () => {
      render(<Button type="material">Material Button</Button>);
      // assert that we find the button by text
      const button = screen.getByText("Material Button");
      // assert that the default material CSS class is added
      expect(button).toHaveClass("mat-btn");
    });

    it("should render primary button", () => {
      render(
        <Button type="material" color="primary">
          Primary Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Primary Material Button");
      // assert that the primary material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn-primary");
    });

    it("should render secondary button", () => {
      render(
        <Button type="material" color="secondary">
          Secondary Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Secondary Material Button");
      // assert that the secondary material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn-secondary");
    });

    it("should render success button", () => {
      render(
        <Button type="material" color="success">
          Success Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Success Material Button");
      // assert that the success material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn-success");
    });

    it("should render danger button", () => {
      render(
        <Button type="material" color="danger">
          Danger Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Danger Material Button");
      // assert that the primary material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn-danger");
    });

    it("should render small size", () => {
      render(
        <Button type="material" size="small">
          Small Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Material Button");
      // assert that the small material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn--small");
    });

    it("should render large size", () => {
      render(
        <Button type="material" size="large">
          Small Material Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Material Button");
      // assert that the large material CSS class is added
      expect(button).toHaveClass("mat-btn mat-btn--large");
    });
  });

  describe("block", () => {
    it("should render default button", () => {
      render(<Button type="block">Block Button</Button>);
      // assert that we find the button by text
      const button = screen.getByText("Block Button");
      // assert that the default block CSS class is added
      expect(button).toHaveClass("block-btn");
    });

    it("should render primary button", () => {
      render(
        <Button type="block" color="primary">
          Primary Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Primary Block Button");
      // assert that the primary block CSS class is added
      expect(button).toHaveClass("block-btn block-btn-primary");
    });

    it("should render secondary button", () => {
      render(
        <Button type="block" color="secondary">
          Secondary Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Secondary Block Button");
      // assert that the secondary block CSS class is added
      expect(button).toHaveClass("block-btn block-btn-secondary");
    });

    it("should render success button", () => {
      render(
        <Button type="block" color="success">
          Success Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Success Block Button");
      // assert that the success block CSS class is added
      expect(button).toHaveClass("block-btn block-btn-success");
    });

    it("should render danger button", () => {
      render(
        <Button type="block" color="danger">
          Danger Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Danger Block Button");
      // assert that the primary block CSS class is added
      expect(button).toHaveClass("block-btn block-btn-danger");
    });

    it("should render small size", () => {
      render(
        <Button type="block" size="small">
          Small Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Block Button");
      // assert that the small block CSS class is added
      expect(button).toHaveClass("block-btn block-btn--small");
    });

    it("should render large size", () => {
      render(
        <Button type="block" size="large">
          Small Block Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Block Button");
      // assert that the large block CSS class is added
      expect(button).toHaveClass("block-btn block-btn--large");
    });
  });

  describe("pill", () => {
    it("should render default button", () => {
      render(<Button type="pill">Pill Button</Button>);
      // assert that we find the button by text
      const button = screen.getByText("Pill Button");
      // assert that the default pill CSS class is added
      expect(button).toHaveClass("pill-btn");
    });

    it("should render primary button", () => {
      render(
        <Button type="pill" color="primary">
          Primary Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Primary Pill Button");
      // assert that the primary pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn-primary");
    });

    it("should render secondary button", () => {
      render(
        <Button type="pill" color="secondary">
          Secondary Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Secondary Pill Button");
      // assert that the secondary pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn-secondary");
    });

    it("should render success button", () => {
      render(
        <Button type="pill" color="success">
          Success Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Success Pill Button");
      // assert that the success pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn-success");
    });

    it("should render danger button", () => {
      render(
        <Button type="pill" color="danger">
          Danger Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Danger Pill Button");
      // assert that the primary pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn-danger");
    });

    it("should render small size", () => {
      render(
        <Button type="pill" size="small">
          Small Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Pill Button");
      // assert that the small pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn--small");
    });

    it("should render large size", () => {
      render(
        <Button type="pill" size="large">
          Small Pill Button
        </Button>
      );
      // assert that we find the button by text
      const button = screen.getByText("Small Pill Button");
      // assert that the large pill CSS class is added
      expect(button).toHaveClass("pill-btn pill-btn--large");
    });
  });
});
