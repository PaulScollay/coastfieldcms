import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure';

// export const adapterAZ = azureBlobStorageAdapter({
//     connectionString: "DefaultEndpointsProtocol=https;AccountName=coastfields;AccountKey=Q39PLnrFLzZh5wsFbyMKuwxQ0nvlPo+N1/qQfvS8T4XeogA0efd9kofFVzcGA7dmnOClJD/2FPXo+AStgHyfBg==;EndpointSuffix=core.windows.net",
//     containerName: "images",
//     allowContainerCreate: false,
//     baseURL: "https://coastfields.blob.core.windows.net"
//   })

// export const adapterAZ = azureBlobStorageAdapter({
//   connectionString: "DefaultEndpointsProtocol=https;AccountName=coastfieldscms;AccountKey=FU8e8W3Y16UqXhyaOdCi8IrpHkz9LpuC7YEhzV2Dq4kt2IUkZVPvG2lHCP2yBZ9VphGV+gZ3DIPm+AStlQWJwg==;EndpointSuffix=core.windows.net",
//   containerName: "media",
//   allowContainerCreate: false,
//   baseURL: "https://coastfieldscms.blob.core.windows.net/"
// })
export const adapterAZ = azureBlobStorageAdapter({
  connectionString: "DefaultEndpointsProtocol=https;AccountName=csbe69f7c4076f1x464dxbab;AccountKey=HZUkP1MnpMKB3O3VIi5ALYKNwRZy+Y/NqzNLEoL66Duw+5XhiIcfkFoxEzRjzlWvLOJ5bf5IzkHViA5K2w/R2Q==;EndpointSuffix=core.windows.net",
  containerName: "media",
  allowContainerCreate: false,
  baseURL: "https://csbe69f7c4076f1x464dxbab.blob.core.windows.net/"
})

