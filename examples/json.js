const riverData = {
  name: 'ns1:timeSeriesResponseType',
  declaredType: 'org.cuahsi.waterml.TimeSeriesResponseType',
  scope: 'javax.xml.bind.JAXBElement$GlobalScope',
  value: {
    queryInfo: {
      queryURL:
        'http://waterservices.usgs.gov/nwis/dv/format=json&sites=07374525,07374000,07290880,07289000,07024175,07022000,07020500,07010000,05587450,05474500,05420500,05416100,05411500,05389500,05288500,05261000,05242300&siteType=ST&siteStatus=all',
      criteria: {
        locationParam:
          '[ALL:07374525, ALL:07374000, ALL:07290880, ALL:07289000, ALL:07024175, ALL:07022000, ALL:07020500, ALL:07010000, ALL:05587450, ALL:05474500, ALL:05420500, ALL:05416100, ALL:05411500, ALL:05389500, ALL:05288500, ALL:05261000, ALL:05242300]',
        variableParam: 'ALL',
        parameter: []
      },
      note: [
        {
          value:
            '[ALL:07374525, ALL:07374000, ALL:07290880, ALL:07289000, ALL:07024175, ALL:07022000, ALL:07020500, ALL:07010000, ALL:05587450, ALL:05474500, ALL:05420500, ALL:05416100, ALL:05411500, ALL:05389500, ALL:05288500, ALL:05261000, ALL:05242300]',
          title: 'filter:sites'
        },
        {
          value: '[ST]',
          title: 'filter:siteType'
        },
        {
          value: '[mode=LATEST, modifiedSince=null]',
          title: 'filter:timeRange'
        },
        {
          value: 'methodIds=[ALL]',
          title: 'filter:methodId'
        },
        {
          value: '2018-12-19T23:14:09.638Z',
          title: 'requestDT'
        },
        {
          value: 'ca33c240-03e3-11e9-a47e-6cae8b663fb6',
          title: 'requestId'
        },
        {
          value:
            'Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.',
          title: 'disclaimer'
        },
        {
          value: 'vaas01',
          title: 'server'
        }
      ]
    },
    timeSeries: [
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT BRAINERD, MN',
          siteCode: [
            {
              value: '05242300',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 46.377744,
              longitude: -94.1833279
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010104',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27035',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '3570',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73008
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05242300:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER NEAR FORT RIPLEY, MN',
          siteCode: [
            {
              value: '05261000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 46.1805222,
              longitude: -94.3658366
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010104',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27035',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '2930',
                qualifiers: ['A'],
                dateTime: '2000-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73054
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05261000:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '20.0',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73219
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00010:00001'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '19.1',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73220
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00010:00002'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '19.5',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73221
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00010:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '16.0',
                qualifiers: ['A'],
                dateTime: '1996-09-21T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73222
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00010:00011'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '7500',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73229
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '333',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73223
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00095:00001'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '321',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73224
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00095:00002'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '328',
                qualifiers: ['A'],
                dateTime: '1999-05-13T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73225
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00095:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '305',
                qualifiers: ['A'],
                dateTime: '1976-05-08T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73226
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:00095:00011'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '7.0',
                qualifiers: ['A'],
                dateTime: '1996-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73227
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT HWY 610 IN BROOKLYN PARK, MN',
          siteCode: [
            {
              value: '05288500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 45.1266318,
              longitude: -93.2968947
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07010206',
              name: 'hucCd'
            },
            {
              value: '27',
              name: 'stateCd'
            },
            {
              value: '27053',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '67.0',
                qualifiers: ['A'],
                dateTime: '1996-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 73228
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05288500:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '20.0',
                qualifiers: ['A'],
                dateTime: '2004-09-27T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42682
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:00010:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '27900',
                qualifiers: ['A'],
                dateTime: '2013-10-28T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 42683
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '8.67',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 42684
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:00065:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '23.0',
                qualifiers: ['A'],
                dateTime: '2004-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42685
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '2760',
                qualifiers: ['A'],
                dateTime: '2004-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42686
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at McGregor, IA',
          siteCode: [
            {
              value: '05389500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 43.02701224,
              longitude: -91.1726298
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060001',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '90095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 54118984,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, laboratory, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, laboratory, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '54118984'
        },
        values: [
          {
            value: [
              {
                value: '444',
                qualifiers: ['A'],
                dateTime: '2004-09-27T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42687
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05389500:90095:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clayton, IA',
          siteCode: [
            {
              value: '05411500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 42.9035981,
              longitude: -91.1451296
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060003',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '19200',
                qualifiers: ['A'],
                dateTime: '1936-06-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 42696
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05411500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clayton, IA',
          siteCode: [
            {
              value: '05411500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 42.9035981,
              longitude: -91.1451296
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060003',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19043',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '12.30',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 242328
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05411500:00065:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI R AT LOCK & DAM 12 AT BELLEVUE, IA',
          siteCode: [
            {
              value: '05416100',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: false
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 42.26084897,
              longitude: -90.423184
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060005',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19097',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '34300',
                qualifiers: ['A'],
                dateTime: '1997-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 48367
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05416100:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI R AT LOCK & DAM 12 AT BELLEVUE, IA',
          siteCode: [
            {
              value: '05416100',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: false
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 42.26084897,
              longitude: -90.423184
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060005',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19097',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '26.0',
                qualifiers: ['A'],
                dateTime: '1997-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 48368
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05416100:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI R AT LOCK & DAM 12 AT BELLEVUE, IA',
          siteCode: [
            {
              value: '05416100',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: false
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 42.26084897,
              longitude: -90.423184
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07060005',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19097',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '2600',
                qualifiers: ['A'],
                dateTime: '1997-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 48369
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05416100:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '21.5',
                qualifiers: ['A'],
                dateTime: '1986-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42781
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00010:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '21.0',
                qualifiers: ['A'],
                dateTime: '1986-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42782
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00010:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '17.0',
                qualifiers: ['A'],
                dateTime: '1978-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42783
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          },
          {
            value: [
              {
                value: '2.5',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 42790
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          },
          {
            value: [
              {
                value: '0.8',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42791
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00010:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '18.0',
                qualifiers: ['A'],
                dateTime: '1997-09-28T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42784
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00010:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '55000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 42785
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '520',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42792
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00095:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '380',
                qualifiers: ['A'],
                dateTime: '1981-09-15T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42786
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00095:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00300',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45809894,
              default: true
            }
          ],
          variableName: 'Dissolved oxygen, water, unfiltered, mg/L',
          variableDescription:
            'Dissolved oxygen, water, unfiltered, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45809894'
        },
        values: [
          {
            value: [
              {
                value: '15.0',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42794
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00300:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00301',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45809895,
              default: true
            }
          ],
          variableName: 'Dissolved oxygen, water, unfiltered, % saturation',
          variableDescription:
            'Dissolved oxygen, water, unfiltered, percent of saturation',
          valueType: 'Derived Value',
          unit: {
            unitCode: '% saturatn'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45809895'
        },
        values: [
          {
            value: [
              {
                value: '105',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42793
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00301:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00400',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45810855,
              default: true
            }
          ],
          variableName: 'pH, water, unfiltered, field, standard units',
          variableDescription: 'pH, water, unfiltered, field, standard units',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'std units'
          },
          options: {
            option: [
              {
                value: 'Median',
                name: 'Statistic',
                optionCode: '00008'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45810855'
        },
        values: [
          {
            value: [
              {
                value: '8.2',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42795
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:00400:00008'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '32295',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 48639362,
              default: true
            }
          ],
          variableName:
            'Colored dissolved organic matter (CDOM), water, in situ, single band excitation, fluorescence emission, ppb QSE',
          variableDescription:
            'Dissolved organic matter fluorescence (fDOM), water, in situ, micrograms per liter as quinine sulfate equivalents (QSE)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ug/l QSE'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '48639362'
        },
        values: [
          {
            value: [
              {
                value: '87.2',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 42797
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:32295:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '8.8',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'YSI EXO2',
                methodID: 215193
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:63680:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '23.0',
                qualifiers: ['A'],
                dateTime: '1997-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42787
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '2910',
                qualifiers: ['A'],
                dateTime: '1997-09-29T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42788
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '90095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 54118984,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, laboratory, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, laboratory, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '54118984'
        },
        values: [
          {
            value: [
              {
                value: '385',
                qualifiers: ['A'],
                dateTime: '1997-09-28T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'sediment station',
                methodID: 42789
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:90095:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Clinton, IA',
          siteCode: [
            {
              value: '05420500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 41.78058635,
              longitude: -90.252073
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080101',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19045',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '99133',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 54387876,
              default: true
            }
          ],
          variableName: 'Nitrate plus nitrite, water, in situ, mg/L as N',
          variableDescription:
            'Nitrate plus nitrite, water, in situ, milligrams per liter as nitrogen',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l as N'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '54387876'
        },
        values: [
          {
            value: [
              {
                value: '3.29',
                qualifiers: ['P', '[4]'],
                dateTime: '2017-02-07T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '[SUNA Sensor]',
                methodID: 42798
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          },
          {
            value: [
              {
                value: '3.80',
                qualifiers: ['P', '[4]'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: '[4]',
                qualifierDescription: 'Qualifier is unknown.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: 'nitratax, [Nitratax Sensor]',
                methodID: 230012
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05420500:99133:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Keokuk, IA',
          siteCode: [
            {
              value: '05474500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 40.39365535,
              longitude: -91.374318
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080104',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19111',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '25.0',
                qualifiers: ['A'],
                dateTime: '1981-09-15T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 43015
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05474500:00010:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Keokuk, IA',
          siteCode: [
            {
              value: '05474500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 40.39365535,
              longitude: -91.374318
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080104',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19111',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '173000',
                qualifiers: ['P'],
                dateTime: '2018-10-31T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 224327
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05474500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Keokuk, IA',
          siteCode: [
            {
              value: '05474500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 40.39365535,
              longitude: -91.374318
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07080104',
              name: 'hucCd'
            },
            {
              value: '19',
              name: 'stateCd'
            },
            {
              value: '19111',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '420',
                qualifiers: ['A'],
                dateTime: '1981-09-15T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 43017
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05474500:00095:00011'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Grafton, IL',
          siteCode: [
            {
              value: '05587450',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.9679722,
              longitude: -90.429
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07110009',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17083',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '88400',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75314
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05587450:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Grafton, IL',
          siteCode: [
            {
              value: '05587450',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.9679722,
              longitude: -90.429
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07110009',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17083',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Observation at 08:00',
                name: 'Statistic',
                optionCode: '30800'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '16.10',
                qualifiers: ['P'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75313
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:05587450:00065:30800'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at St. Louis, MO',
          siteCode: [
            {
              value: '07010000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.629,
              longitude: -90.1797778
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140101',
              name: 'hucCd'
            },
            {
              value: '29',
              name: 'stateCd'
            },
            {
              value: '29510',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '244000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75971
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07010000:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at St. Louis, MO',
          siteCode: [
            {
              value: '07010000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.629,
              longitude: -90.1797778
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140101',
              name: 'hucCd'
            },
            {
              value: '29',
              name: 'stateCd'
            },
            {
              value: '29510',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Observation at 08:00',
                name: 'Statistic',
                optionCode: '30800'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '14.10',
                qualifiers: ['P'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75970
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07010000:00065:30800'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at St. Louis, MO',
          siteCode: [
            {
              value: '07010000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.629,
              longitude: -90.1797778
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140101',
              name: 'hucCd'
            },
            {
              value: '29',
              name: 'stateCd'
            },
            {
              value: '29510',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '77.0',
                qualifiers: ['A'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75972
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07010000:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at St. Louis, MO',
          siteCode: [
            {
              value: '07010000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 38.629,
              longitude: -90.1797778
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140101',
              name: 'hucCd'
            },
            {
              value: '29',
              name: 'stateCd'
            },
            {
              value: '29510',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '25100',
                qualifiers: ['A'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 75973
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07010000:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Chester, IL',
          siteCode: [
            {
              value: '07020500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.90074167,
              longitude: -89.8302111
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17157',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '283000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76099
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07020500:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Chester, IL',
          siteCode: [
            {
              value: '07020500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.90074167,
              longitude: -89.8302111
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17157',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Observation at 08:00',
                name: 'Statistic',
                optionCode: '30800'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '18.31',
                qualifiers: ['P'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76098
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07020500:00065:30800'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Chester, IL',
          siteCode: [
            {
              value: '07020500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.90074167,
              longitude: -89.8302111
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17157',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '72.0',
                qualifiers: ['A', 'e'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'e',
                qualifierDescription: 'Value has been estimated.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76100
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07020500:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Chester, IL',
          siteCode: [
            {
              value: '07020500',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.90074167,
              longitude: -89.8302111
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17157',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '23100',
                qualifiers: ['A', 'e'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'e',
                qualifierDescription: 'Value has been estimated.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76101
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07020500:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Thebes, IL',
          siteCode: [
            {
              value: '07022000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.2216,
              longitude: -89.462975
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17003',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '296000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76125
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07022000:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Thebes, IL',
          siteCode: [
            {
              value: '07022000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.2216,
              longitude: -89.462975
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17003',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Observation at 08:00',
                name: 'Statistic',
                optionCode: '30800'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '25.02',
                qualifiers: ['P'],
                dateTime: '2018-12-19T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76124
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07022000:00065:30800'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Thebes, IL',
          siteCode: [
            {
              value: '07022000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.2216,
              longitude: -89.462975
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17003',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80154',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196299,
              default: true
            }
          ],
          variableName: 'Suspended sediment concentration, mg/L',
          variableDescription:
            'Suspended sediment concentration, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196299'
        },
        values: [
          {
            value: [
              {
                value: '83.0',
                qualifiers: ['P'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76126
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07022000:80154:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Thebes, IL',
          siteCode: [
            {
              value: '07022000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.2216,
              longitude: -89.462975
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '07140105',
              name: 'hucCd'
            },
            {
              value: '17',
              name: 'stateCd'
            },
            {
              value: '17003',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '80155',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 53196300,
              default: true
            }
          ],
          variableName: 'Suspended sediment discharge, tons/d',
          variableDescription:
            'Suspended sediment discharge, short tons per day',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'tons/day'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '53196300'
        },
        values: [
          {
            value: [
              {
                value: '26100',
                qualifiers: ['P', 'e'],
                dateTime: '2017-09-30T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'e',
                qualifierDescription: 'Value has been estimated.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              },
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 1,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 76127
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07022000:80155:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at New Madrid, MO',
          siteCode: [
            {
              value: '07024175',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 36.5808333,
              longitude: -89.5472222
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08010100',
              name: 'hucCd'
            },
            {
              value: '29',
              name: 'stateCd'
            },
            {
              value: '29143',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '827000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 220300
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07024175:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT VICKSBURG, MS',
          siteCode: [
            {
              value: '07289000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 32.315,
              longitude: -90.9058333
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08060100',
              name: 'hucCd'
            },
            {
              value: '28',
              name: 'stateCd'
            },
            {
              value: '28149',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '1020000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 79165
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07289000:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'MISSISSIPPI RIVER AT NATCHEZ, MS',
          siteCode: [
            {
              value: '07290880',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 31.56044417,
              longitude: -91.418727
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08060100',
              name: 'hucCd'
            },
            {
              value: '28',
              name: 'stateCd'
            },
            {
              value: '28001',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '45.68',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 79186
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07290880:00065:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '6.9',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61161
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00010:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '6.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61162
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00010:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true
            }
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'deg C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807042'
        },
        values: [
          {
            value: [
              {
                value: '6.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61163
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00010:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '851000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61176
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '32.73',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61158
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00065:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '32.47',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61159
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00065:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '32.62',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61160
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00065:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '380',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61164
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00095:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '368',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61165
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00095:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00095',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807295,
              default: true
            }
          ],
          variableName:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25&#176;C',
          variableDescription:
            'Specific conductance, water, unfiltered, microsiemens per centimeter at 25 degrees Celsius',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'uS/cm @25C'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807295'
        },
        values: [
          {
            value: [
              {
                value: '373',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61166
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00095:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00300',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45809894,
              default: true
            }
          ],
          variableName: 'Dissolved oxygen, water, unfiltered, mg/L',
          variableDescription:
            'Dissolved oxygen, water, unfiltered, milligrams per liter',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45809894'
        },
        values: [
          {
            value: [
              {
                value: '10.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61177
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00300:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00400',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45810855,
              default: true
            }
          ],
          variableName: 'pH, water, unfiltered, field, standard units',
          variableDescription: 'pH, water, unfiltered, field, standard units',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'std units'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45810855'
        },
        values: [
          {
            value: [
              {
                value: '7.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61170
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00400:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00400',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45810855,
              default: true
            }
          ],
          variableName: 'pH, water, unfiltered, field, standard units',
          variableDescription: 'pH, water, unfiltered, field, standard units',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'std units'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45810855'
        },
        values: [
          {
            value: [
              {
                value: '7.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61171
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00400:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00400',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45810855,
              default: true
            }
          ],
          variableName: 'pH, water, unfiltered, field, standard units',
          variableDescription: 'pH, water, unfiltered, field, standard units',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'std units'
          },
          options: {
            option: [
              {
                value: 'Median',
                name: 'Statistic',
                optionCode: '00008'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45810855'
        },
        values: [
          {
            value: [
              {
                value: '7.8',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61172
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00400:00008'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00480',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45811103,
              default: true
            }
          ],
          variableName: 'Salinity, water, unfiltered, parts per thousand',
          variableDescription:
            'Salinity, water, unfiltered, parts per thousand',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ppth'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45811103'
        },
        values: [
          {
            value: [
              {
                value: '0.2',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61167
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00480:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00480',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45811103,
              default: true
            }
          ],
          variableName: 'Salinity, water, unfiltered, parts per thousand',
          variableDescription:
            'Salinity, water, unfiltered, parts per thousand',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ppth'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45811103'
        },
        values: [
          {
            value: [
              {
                value: '0.2',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61168
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00480:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00480',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45811103,
              default: true
            }
          ],
          variableName: 'Salinity, water, unfiltered, parts per thousand',
          variableDescription:
            'Salinity, water, unfiltered, parts per thousand',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ppth'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45811103'
        },
        values: [
          {
            value: [
              {
                value: '0.2',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61169
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:00480:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '106',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215575
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:63680:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '85.0',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215576
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:63680:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '91.9',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215574
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:63680:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Baton Rouge, LA',
          siteCode: [
            {
              value: '07374000',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 30.44566667,
              longitude: -91.1915556
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08070100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22121',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '99133',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 54387876,
              default: true
            }
          ],
          variableName: 'Nitrate plus nitrite, water, in situ, mg/L as N',
          variableDescription:
            'Nitrate plus nitrite, water, in situ, milligrams per liter as nitrogen',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'mg/l as N'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '54387876'
        },
        values: [
          {
            value: [
              {
                value: '1.60',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61178
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374000:99133:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Belle Chasse, LA',
          siteCode: [
            {
              value: '07374525',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 29.85715084,
              longitude: -89.977847
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08090100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22075',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true
            }
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft3/s'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807197'
        },
        values: [
          {
            value: [
              {
                value: '876000',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61182
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374525:00060:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Belle Chasse, LA',
          siteCode: [
            {
              value: '07374525',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 29.85715084,
              longitude: -89.977847
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08090100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22075',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '00065',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807202,
              default: true
            }
          ],
          variableName: 'Gage height, ft',
          variableDescription: 'Gage height, feet',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'ft'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '45807202'
        },
        values: [
          {
            value: [
              {
                value: '15.15',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 61181
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374525:00065:00003'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Belle Chasse, LA',
          siteCode: [
            {
              value: '07374525',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 29.85715084,
              longitude: -89.977847
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08090100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22075',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Maximum',
                name: 'Statistic',
                optionCode: '00001'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '97.4',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215579
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374525:63680:00001'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Belle Chasse, LA',
          siteCode: [
            {
              value: '07374525',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 29.85715084,
              longitude: -89.977847
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08090100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22075',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Minimum',
                name: 'Statistic',
                optionCode: '00002'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '91.4',
                qualifiers: ['P'],
                dateTime: '2018-12-18T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215577
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374525:63680:00002'
      },
      {
        sourceInfo: {
          siteName: 'Mississippi River at Belle Chasse, LA',
          siteCode: [
            {
              value: '07374525',
              network: 'NWIS',
              agencyCode: 'USGS'
            }
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'CST'
            },
            daylightSavingsTimeZone: {
              zoneOffset: '-05:00',
              zoneAbbreviation: 'CDT'
            },
            siteUsesDaylightSavingsTime: true
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 29.85715084,
              longitude: -89.977847
            },
            localSiteXY: []
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: 'ST',
              name: 'siteTypeCd'
            },
            {
              value: '08090100',
              name: 'hucCd'
            },
            {
              value: '22',
              name: 'stateCd'
            },
            {
              value: '22075',
              name: 'countyCd'
            }
          ]
        },
        variable: {
          variableCode: [
            {
              value: '63680',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 51443524,
              default: true
            }
          ],
          variableName:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 &#177;2.5&#176;, formazin nephelometric units (FNU)',
          variableDescription:
            'Turbidity, water, unfiltered, monochrome near infra-red LED light, 780-900 nm, detection angle 90 +-2.5 degrees, formazin nephelometric units (FNU)',
          valueType: 'Derived Value',
          unit: {
            unitCode: 'FNU'
          },
          options: {
            option: [
              {
                value: 'Mean',
                name: 'Statistic',
                optionCode: '00003'
              }
            ]
          },
          note: [],
          noDataValue: -999999.0,
          variableProperty: [],
          oid: '51443524'
        },
        values: [
          {
            value: [
              {
                value: '88.7',
                qualifiers: ['A'],
                dateTime: '2016-06-20T00:00:00.000'
              }
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd'
              }
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: '',
                methodID: 215578
              }
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: []
          }
        ],
        name: 'USGS:07374525:63680:00003'
      }
    ]
  },
  nil: false,
  globalScope: true,
  typeSubstituted: false
};
