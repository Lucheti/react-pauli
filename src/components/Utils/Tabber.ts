export class Tabber {
  private openTabIdentifier: string
  public get identifier() { return this.openTabIdentifier }

  constructor( initialTab: string ){
    this.openTabIdentifier = initialTab
  }

  public tab( identifier: string ): Tabber{
   return new Tabber(identifier)
  }
}