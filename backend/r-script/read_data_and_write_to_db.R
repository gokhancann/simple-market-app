setwd('~/../Desktop/simple-market-app/')

library(data.table)
library(lubridate)
library(openxlsx)
library(DBI)

# master data link
# https://www.kaggle.com/omercolakoglu/turkish-market-sales-dataset-with-9000items
masterdata <- read.xlsx('masterdata/MarketSales.xlsx')
masterdata <- as.data.table(masterdata)


# create lookup tables and remove some string columns
item_lookup <- unique(masterdata[,.(ITEMCODE, ITEMNAME, BRANDCODE, BRAND, 
                                    CATEGORY_NAME1, CATEGORY_NAME2, CATEGORY_NAME3)])
masterdata[, ITEMNAME := NULL]
masterdata[, BRAND := NULL]
masterdata[, CATEGORY_NAME1 := NULL][, CATEGORY_NAME2 := NULL][, CATEGORY_NAME3 := NULL]

branch_lookup <- unique(masterdata[, .(BRANCHNR, BRANCH)])
masterdata[, BRANCH :=  NULL]

masterdata[, CITYID := .GRP, by = 'CITY']
city_lookup <- unique(masterdata[, .(CITYID, CITY)])
masterdata[, CITY := NULL]

masterdata[, REGIONID := .GRP, by = 'REGION']
region_lookup <- unique(masterdata[, .(REGIONID, REGION)])
masterdata[, REGION := NULL]

# convert date columns to date format
masterdata[, DATE_ := as.Date(DATE_, origin = '1900-01-01')]
masterdata[, STARTDATE := as.Date(STARTDATE, origin = '1900-01-01')]
masterdata[, ENDDATE := as.Date(ENDDATE, origin = '1900-01-01')]

# convert float columns to int
masterdata[, ID := as.integer(ID)]
masterdata[, AMOUNT := as.integer(AMOUNT)]
masterdata[, PRICE := as.integer(PRICE)]
masterdata[, LINENETTOTAL := as.integer(LINENETTOTAL)]
masterdata[, LINENET := as.integer(LINENET)]
masterdata[, BRANCHNR := as.integer(BRANCHNR)]
masterdata[, CLIENTCODE := as.integer(CLIENTCODE)]

# connect DB
con <- DBI::dbConnect(RPostgres::Postgres(),
                      dbname = 'marketsales',
                      host = 'localhost',
                      port = 5432,
                      user = 'postgres',
                      password = '123')

# write tables to PostgreSQL DB
dbWriteTable(con, 'masterdata', masterdata)
dbWriteTable(con, 'itemlookup', item_lookup)
dbWriteTable(con, 'branchlookup', branch_lookup)
dbWriteTable(con, 'citylookup', city_lookup)

# disconnect from db
DBI::dbDisconnect(con)

