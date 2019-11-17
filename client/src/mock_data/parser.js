var parser = new DOMParser();
var items = [];
var productData = `<Items>
<Item> 
<ASIN>B00KOKTZLQ</ASIN> 
<OfferSummary> 
  <LowestNewPrice> 
    <Amount>3998</Amount> 
    <CurrencyCode>USD</CurrencyCode> 
    <FormattedPrice>$39.98</FormattedPrice> 
  </LowestNewPrice>  
  <TotalNew>4</TotalNew> 
  <TotalUsed>0</TotalUsed> 
  <TotalCollectible>0</TotalCollectible> 
  <TotalRefurbished>0</TotalRefurbished> 
</OfferSummary> 
<Offers> 
  <TotalOffers>1</TotalOffers> 
  <TotalOfferPages>1</TotalOfferPages> 
  <Offer> 
    <OfferAttributes> 
      <Condition>New</Condition> 
    </OfferAttributes> 
    <OfferListing> 
      <OfferListingId>  
       LYcccWDl3oNWXKkngMuydLjjKXsOR4AO2tGTdMW%2BNOA%2F%2FV61ektF%2FstkahL39vySB75wmcQJ7lsWOW3NAjVZpwgnQnxZE62sf%2B34NWSBuAzkkR7lCjtGLXn0aFfQ5KAGmNFYzScqWHSecKmnMA%2BuBA%3D%3D 
      </OfferListingId> 
      <Price>  
        <Amount>6000</Amount>  
        <CurrencyCode>USD</CurrencyCode>  
        <FormattedPrice>$60.00</FormattedPrice> 
      </Price> 
      <SalePrice>
          <Amount>4495</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$44.95</FormattedPrice>
      </SalePrice>
      <AmountSaved>
          <Amount>1505</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$15.05</FormattedPrice>
      </AmountSaved>
      <PercentageSaved>25</PercentageSaved>
      <Availability>Usually ships in 1-2 business days</Availability> 
      <AvailabilityAttributes>  
        <AvailabilityType>now</AvailabilityType>  
        <MinimumHours>24</MinimumHours>  
        <MaximumHours>48</MaximumHours> 
      </AvailabilityAttributes> 
      <IsEligibleForSuperSaverShipping>0</IsEligibleForSuperSaverShipping>
      <IsEligibleForPrime>0</IsEligibleForPrime>
    </OfferListing> 
  </Offer> 
</Offers>
</Item>
<Item> 
<ASIN>B00KOKTZLQ</ASIN> 
<OfferSummary> 
  <LowestNewPrice> 
    <Amount>3655</Amount> 
    <CurrencyCode>USD</CurrencyCode> 
    <FormattedPrice>$36.55</FormattedPrice> 
  </LowestNewPrice>  
  <TotalNew>4</TotalNew> 
  <TotalUsed>0</TotalUsed> 
  <TotalCollectible>0</TotalCollectible> 
  <TotalRefurbished>0</TotalRefurbished> 
</OfferSummary> 
<Offers> 
  <TotalOffers>1</TotalOffers> 
  <TotalOfferPages>1</TotalOfferPages> 
  <Offer> 
    <OfferAttributes> 
      <Condition>New</Condition> 
    </OfferAttributes> 
    <OfferListing> 
      <OfferListingId>  
       LYcccWDl3oNWXKkngMuydLjjKXsOR4AO2tGTdMW%2BNOA%2F%2FV61ektF%2FstkahL39vySB75wmcQJ7lsWOW3NAjVZpwgnQnxZE62sf%2B34NWSBuAzkkR7lCjtGLXn0aFfQ5KAGmNFYzScqWHSecKmnMA%2BuBA%3D%3D 
      </OfferListingId> 
      <Price>  
        <Amount>6000</Amount>  
        <CurrencyCode>USD</CurrencyCode>  
        <FormattedPrice>$60.00</FormattedPrice> 
      </Price> 
      <SalePrice>
          <Amount>4495</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$44.95</FormattedPrice>
      </SalePrice>
      <AmountSaved>
          <Amount>1505</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$15.05</FormattedPrice>
      </AmountSaved>
      <PercentageSaved>25</PercentageSaved>
      <Availability>Usually ships in 1-2 business days</Availability> 
      <AvailabilityAttributes>  
        <AvailabilityType>now</AvailabilityType>  
        <MinimumHours>24</MinimumHours>  
        <MaximumHours>48</MaximumHours> 
      </AvailabilityAttributes> 
      <IsEligibleForSuperSaverShipping>0</IsEligibleForSuperSaverShipping>
      <IsEligibleForPrime>0</IsEligibleForPrime>
    </OfferListing> 
  </Offer> 
</Offers>
</Item>
<Item> 
<ASIN>B00KOKTZLQ</ASIN> 
<OfferSummary> 
  <LowestNewPrice> 
    <Amount>3755</Amount> 
    <CurrencyCode>USD</CurrencyCode> 
    <FormattedPrice>$37.55</FormattedPrice> 
  </LowestNewPrice>  
  <TotalNew>4</TotalNew> 
  <TotalUsed>0</TotalUsed> 
  <TotalCollectible>0</TotalCollectible> 
  <TotalRefurbished>0</TotalRefurbished> 
</OfferSummary> 
<Offers> 
  <TotalOffers>1</TotalOffers> 
  <TotalOfferPages>1</TotalOfferPages> 
  <Offer> 
    <OfferAttributes> 
      <Condition>New</Condition> 
    </OfferAttributes> 
    <OfferListing> 
      <OfferListingId>  
       LYcccWDl3oNWXKkngMuydLjjKXsOR4AO2tGTdMW%2BNOA%2F%2FV61ektF%2FstkahL39vySB75wmcQJ7lsWOW3NAjVZpwgnQnxZE62sf%2B34NWSBuAzkkR7lCjtGLXn0aFfQ5KAGmNFYzScqWHSecKmnMA%2BuBA%3D%3D 
      </OfferListingId> 
      <Price>  
        <Amount>6000</Amount>  
        <CurrencyCode>USD</CurrencyCode>  
        <FormattedPrice>$60.00</FormattedPrice> 
      </Price> 
      <SalePrice>
          <Amount>4495</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$44.95</FormattedPrice>
      </SalePrice>
      <AmountSaved>
          <Amount>1505</Amount>
          <CurrencyCode>USD</CurrencyCode>
          <FormattedPrice>$15.05</FormattedPrice>
      </AmountSaved>
      <PercentageSaved>25</PercentageSaved>
      <Availability>Usually ships in 1-2 business days</Availability> 
      <AvailabilityAttributes>  
        <AvailabilityType>now</AvailabilityType>  
        <MinimumHours>24</MinimumHours>  
        <MaximumHours>48</MaximumHours> 
      </AvailabilityAttributes> 
      <IsEligibleForSuperSaverShipping>0</IsEligibleForSuperSaverShipping>
      <IsEligibleForPrime>0</IsEligibleForPrime>
    </OfferListing> 
  </Offer> 
</Offers>
</Item>
</Items>`

let xmlDoc = parser.parseFromString(productData,"text/xml");


let itemsXML = xmlDoc.getElementsByTagName("Item"); 

for (var i = 0; i < itemsXML.length; i++) {
    let item = itemsXML[i];
    items.push({    
        price: item.childNodes[3].childNodes[1].childNodes[1].childNodes[0].nodeValue,
        title: item.childNodes[1].childNodes[0].nodeValue
    })
}

export default items;

